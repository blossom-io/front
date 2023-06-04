import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { parse } from "querystring";
import { Container, Grid, Typography, Alert } from "@mui/material";
import sxFailed from "../infrastructure/ui/components/Container/Failed";
import sxErrMsg from "../infrastructure/ui/components/Container/ErrMsg";
import Logo from "../infrastructure/ui/components/Logo/BlossomLogo";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";

export default function Home() {
    return (
        <Container>
            <Grid sx={sxFailed}>
                <Logo />
                <ErrMsg />
            </Grid>
        </Container>
    );
}

const ErrMsg = () => {
    const router = useRouter();
    const { err, state } = router.query;
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (err === "not_subscribed") {
            setErrorMessage(`Вы не подписаны на канал ${state}`);
        } else {
            setErrorMessage("Неизвестная ошибка");
        }
    }, [err]);

    return <Alert severity="warning">{errorMessage}</Alert>;
};
