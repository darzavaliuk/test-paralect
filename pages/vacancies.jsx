import JobSearch from "../components/JobSearch.jsx";
import {createStyles} from "@mantine/core";


const useStyles = createStyles((theme) => ({
    profile: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing.md,
        marginTop: theme.spacing.xl,
    },

    services: {
        marginTop: theme.spacing.xl,
    },
}));

function Welcome() {

    const {classes} = useStyles();
    return (
        <div className={classes.profile}>
            <JobSearch/>
        </div>
    );
}

export default Welcome;
