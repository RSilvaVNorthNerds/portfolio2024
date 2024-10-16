const contactStyles = {
    form:{ 
        display: "flex", 
        flexDirection: "column" as const, 
        gap: "1rem" 
    },
    contactInput:{
        color: "#fff",

        "&::placeholder": {
            color: "#fff",
        },
    }
}

export default contactStyles;