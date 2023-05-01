import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Link from "next/link";

const About = () => {
    const router = useRouter();
    // const { name } = router.query;

    let subchatInviteBotURL = process.env.NEXT_PUBLIC_SUBCHAT_INVITE_BOT_URL;
    // const buttonURL = `${subchatInviteBotURL}?start=${name}`;

    return (
        <Link
            href={{
                pathname: `${subchatInviteBotURL}`,
                query: { ...router.query },
            }}
        >
            <Button variant="contained" color="primary">
                Enter Subchat
            </Button>
        </Link>
    );
};

export default About;
