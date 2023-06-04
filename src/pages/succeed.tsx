import { Container, Grid, Typography } from "@mui/material";
import sxMainContainer from "../infrastructure/ui/components/Container/Main";
import Logo from "../infrastructure/ui/components/Logo/BlossomLogo";
import RedirectToBot from "../infrastructure/ui/components/Button/RedirectToBot";

export default function Home() {
    return (
        <Container sx={sxMainContainer}>
            <Grid>
                <Logo />
            </Grid>
            <Grid>
                <RedirectToBot />
            </Grid>
        </Container>
    );
}
