#[cfg(test)]
mod tests;

use std::collections::HashMap;

pub struct TelegramClient {
    base_url: String,
    bot_api_token: String,
    bot_chat_id: String,
}

impl TelegramClient {
    pub fn new(bot_api_token: &str, bot_chat_id: &str, base_url: Option<&str>) -> TelegramClient {
        let actual_base_url: &str = match base_url {
            Some(value) => value,
            None => "https://api.telegram.org/",
        };
        TelegramClient {
            bot_api_token: bot_api_token.into(),
            bot_chat_id: bot_chat_id.into(),
            base_url: actual_base_url.into(),
        }
    }

    #[allow(dead_code)]
    pub fn base_url(&self) -> &str {
        &self.base_url
    }

    #[allow(dead_code)]
    pub fn bot_api_token(&self) -> &str {
        &self.bot_api_token
    }

    #[allow(dead_code)]
    pub fn bot_chat_id(&self) -> &str {
        &self.bot_chat_id
    }

    pub async fn send_message(&self, message: &str) -> bool {
        let client = reqwest::Client::new();
        let mut map = HashMap::<&str, &str>::new();
        map.insert("chat_id", self.bot_chat_id.as_str());
        map.insert("text", message);
        let url = format!("{}bot{}/sendMessage", self.base_url, self.bot_api_token);

        match client.post(url).json(&map).send().await {
            Ok(_) => true,
            Err(_) => false,
        }
    }
}
