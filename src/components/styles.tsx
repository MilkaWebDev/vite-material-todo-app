import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    title: {
        fontSize: "25px",
        color: "white",
        fontWeight: 500
    },
    addBtn: {
        background: "#9c4bf2",
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: "1rem auto",
    }
}))

export default useStyles