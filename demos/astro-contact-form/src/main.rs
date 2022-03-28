mod telegram_client;
use telegram_client::TelegramClient;

use netlify_lambda_http::{
    handler,
    lambda::{run, Context},
    IntoResponse, Request,
};
use serde::{Deserialize, Serialize};

type Error = Box<dyn std::error::Error + Send + Sync + 'static>;

#[tokio::main]

async fn main() -> Result<(), Error> {
    run(handler(message_via_telegram_bot)).await?;

    Ok(())
}

#[derive(Deserialize, Serialize)]
struct ClientRequest {
    bot_field: String,
    email: String,
    name: String,
    message: String,
}

async fn message_via_telegram_bot(
    request: Request,
    _: Context,
) -> Result<impl IntoResponse, Error> {
    let body = request.body();
    let body: ClientRequest = serde_json::from_slice(&body)?;

    let telegram_message = serde_json::to_string_pretty(&body).unwrap();
    let telegram_bot_api_token = dotenv::var("TELEGRAM_BOT_API_TOKEN").unwrap();
    let telegram_bot_chat_id = dotenv::var("TELEGRAM_BOT_CHAT_ID").unwrap();
    let telegram_client = TelegramClient::new(&telegram_bot_api_token, &telegram_bot_chat_id, None);
    telegram_client.send_message(&telegram_message).await;

    Ok("Received loud and clear!")
}
