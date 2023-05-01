import { useRouter } from "next/router";
import { Button, Box, Grow } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

export default function ConnectTwitch() {
    const router = useRouter();
    const streamer = router.query.streamer;

    const clientId = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;
    const redirectUrl = process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URL;

    const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user_subscriptions&state=${streamer}`;

    return (
        <Box maxWidth="sm">
            <Button
                variant="contained"
                size="large"
                startIcon={<FontAwesomeIcon icon={faTwitch} />}
                color={"primary"}
                href={twitchAuthUrl}
            >
                Войти
            </Button>
        </Box>
    );
}
