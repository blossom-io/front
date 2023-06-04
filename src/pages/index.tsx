import { Container, Grid } from "@mui/material";
import sxMainContainer from "../infrastructure/ui/components/Container/Main";
import Logo from "../infrastructure/ui/components/Logo/BlossomLogo";


export default function Home() {
    return (
        <Container sx={sxMainContainer}>
            <Grid>
                <Logo />
            </Grid>
        </Container>
    );
}
