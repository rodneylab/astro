mod telegram_client;
use telegram_client::TelegramClient;

use aws_lambda_events::encodings::Body;
use aws_lambda_events::event::apigw::{ApiGatewayProxyRequest, ApiGatewayProxyResponse};
use http::{header::HeaderMap, Method};
use lambda_runtime::{handler_fn, Context, Error};
use log::LevelFilter;
use serde::{Deserialize, Serialize};
use simple_logger::SimpleLogger;

#[derive(Deserialize, Serialize)]
struct ContactFormRequest {
    bot_field: String,
    email: String,
    name: String,
    message: String,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    SimpleLogger::new()
        .with_level(LevelFilter::Info)
        .init()
        .unwrap();

    let func = handler_fn(my_handler);
    lambda_runtime::run(func).await?;
    Ok(())
}

pub(crate) async fn my_handler(
    event: ApiGatewayProxyRequest,
    _ctx: Context,
) -> Result<ApiGatewayProxyResponse, Error> {
    let body = event.body.unwrap();
    let body: ContactFormRequest = serde_json::from_slice(body.as_bytes())?;

    if event.http_method != Method::POST {
        let resp = ApiGatewayProxyResponse {
            status_code: 405,
            headers: HeaderMap::new(),
            multi_value_headers: HeaderMap::new(),
            body: Some(Body::Text(String::from("Method Not Allowed"))),
            is_base64_encoded: Some(false),
        };
        return Ok(resp);
    }

    let telegram_message = serde_json::to_string_pretty(&body).unwrap();
    let telegram_bot_api_token = dotenv::var("TELEGRAM_BOT_API_TOKEN").unwrap();
    let telegram_bot_chat_id = dotenv::var("TELEGRAM_BOT_CHAT_ID").unwrap();
    let telegram_client = TelegramClient::new(&telegram_bot_api_token, &telegram_bot_chat_id, None);
    telegram_client.send_message(&telegram_message).await;

    let resp = ApiGatewayProxyResponse {
        status_code: 200,
        headers: HeaderMap::new(),
        multi_value_headers: HeaderMap::new(),
        body: Some(Body::Text(String::from("Received loud and clear!"))),
        is_base64_encoded: Some(false),
    };

    Ok(resp)
}
