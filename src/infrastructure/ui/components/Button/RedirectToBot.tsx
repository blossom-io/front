import { useRouter } from "next/router";
import { Button, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

export default function RedirectToBot() {
    const router = useRouter();
    const query = router.query;
    const code = query.code;

    const subchatInviteBotURL = process.env.NEXT_PUBLIC_SUBCHAT_INVITE_BOT_URL;
    const buttonURL = `${subchatInviteBotURL}?start=${code}`;

    console.log("subchatInviteBotURL:", subchatInviteBotURL);
    console.log("subchatInviteBotURL:", buttonURL);

    return (
        <Box maxWidth="sm">
            <Button
                variant="contained"
                size="large"
                startIcon={<FontAwesomeIcon icon={faTelegram} />}
                color={"secondary"}
                href={buttonURL}
            >
                Вступить в сабчат
            </Button>
        </Box>
    );
}
