function getSubchatInviteBotURL(): string | undefined {
    switch (process.env.NEXT_PUBLIC_ENV) {
        case "production": return process.env.NEXT_PUBLIC_SUBCHAT_INVITE_BOT_URL;
        // case "development": return process.env.NEXT_PUBLIC_SUBCHAT_INVITE_BOT_URL_DEV;
        default: return process.env.NEXT_PUBLIC_SUBCHAT_INVITE_BOT_URL_DEV;
    }
}

function getRedirectURL(): string | undefined {
    switch (process.env.NEXT_PUBLIC_ENV) {
        case "production": return process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URL;
        // case "development": return process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URL_DEV;
        default: return process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URL_DEV;
    }
}

export default { getRedirectURL, getSubchatInviteBotURL }