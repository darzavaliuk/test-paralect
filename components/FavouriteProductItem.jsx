import {
    createStyles,
    Text,
    Card,
    SimpleGrid,
} from "@mantine/core";
import {useState} from "react";

const SALARY = 'з/п';
const MINUS = '-';
const FROM = 'от';
const DOT = '•';


const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 34,
        fontWeight: 900,
        [theme.fn.smallerThan("sm")]: {
            fontSize: 24,
        },
    },

    description: {
        maxWidth: 770,
        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },

    card: {
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
    },

    cardTitle: {
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "24px",

        /* Blue Main 500 */

        color: "#5E96FC",
        "&::after": {
            content: '""',
            display: "block",
        },
    },

    money: {
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "20px",
        color: "#232134"
    },

    workingHours: {
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
        color: "#232134"
    },

    help: {
        padding: 0,
    },
    logo: {
        maxWidth: 60,


    },
}));

function FavoriteProductItem({data}) {

    const [selectedCard, setSelectedCard] = useState(null);
    const {classes} = useStyles();

    function getSvgUrl(index) {
        if (index === selectedCard) {

            return '/star2.svg';
        } else {
            return '/star.svg';
        }
    }

    function handleClickFavorite(feature) {
        setSelectedCard(feature.id);

        // localStorage.clear()
        console.log("start")
        const favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts'));
        console.log(favoriteProducts)
        let update;
        if (favoriteProducts) {
            // console.log("kdsjf")
            update = favoriteProducts.filter(p => p.id !== feature.id);
        } else {
            update = []
        }
        let data
        if (favoriteProducts.length === update.length)
            data = [...update, {
                profession: feature.profession,
                id: feature.id,
                payment_from: feature.payment_from,
                payment_to: feature.payment_to,
                type_of_work: feature["type_of_work"]["title"],
                town: feature["town"]["title"]
            }];
        else
            data = update
        // let data = data.filter(p => p.id !== feature.id);
        localStorage.setItem('favoriteProducts', JSON.stringify(data))
        let favoriteProduct = JSON.parse(localStorage.getItem('favoriteProducts'));
        console.log(favoriteProduct)
    }


    return (
        <div>
            <SimpleGrid
                mt={16}
                cols={1}
                // w={773}
                // spacing="xl"
                // mt={50}
                breakpoints={[{maxWidth: "md", cols: 1}]}
            >

                <Card
                    key={data["profession"]}
                    className={classes.card}
                    p="24px"
                    style={{
                        border: "1px solid #EAEBED",
                        borderRadius: "12px"
                    }}

                    // onClick={handleClick}
                >

                    {/* <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} /> */}
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Text className={classes.cardTitle}>
                            {data["profession"]}
                        </Text>
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <image href={getSvgUrl(data.id)} width="20" height="20"
                                   onClick={(e) => handleClickFavorite(data, e)}/>
                        </svg>
                        {/* <img src="/star.svg" alt="My SVG" /> */}
                        {/* <Rating defaultValue={2} color="blue" count={1}  onClick={(e) => handleClickFavorite(feature, e) /> */}
                    </div>
                    <div style={{display: "flex", marginTop: "12.5px"}}>
                        {(data["payment_from"] !== 0 || data["payment_to"] !== 0) ?
                            (<><Text className={classes.money}>
                                {(data["payment_from"] !== 0 && data["payment_to"] !== 0) ? (
                                    <div style={{display: "flex"}}><Text className={classes.money}
                                                                         style={{marginRight: "4px"}}>{SALARY} {data["payment_from"]}</Text><Text
                                        className={classes.money}>{MINUS} {data["payment_to"]}</Text></div>) : (<></>)}
                            </Text>

                                {(data["payment_from"] !== 0 && data["payment_to"] === 0) ? (
                                    <div><Text className={classes.money}>{SALARY} {FROM} {data["payment_from"]}</Text>
                                    </div>) : (<></>)}
                                {(data["payment_from"] === 0 && data["payment_to"] !== 0) ? (
                                    <div><Text className={classes.money}
                                               style={{marginRight: "4px"}}>{SALARY} {data["payment_to"]}</Text>
                                    </div>) : (<></>)}

                                <Text className={classes.money} style={{marginLeft: "2px"}}>
                                    {data["currency"]}
                                </Text><Text style={{marginRight: "12px", marginLeft: "12px"}}>{DOT}</Text></>) : (<></>)}
                        <Text className={classes.workingHours}>
                            {data["type_of_work"]}
                        </Text>
                    </div>

                    {/* <Rating defaultValue={2} color="blue" count={1} onClick={handleClickFavorite} /> */}
                    <div style={{display: "flex", marginTop: "13px"}}>
                        <img src={"../location.svg"} alt={'location'}/>
                        <Text style={{marginLeft: "11px"}} className={classes.money}>
                            {data["town"]}
                        </Text>
                    </div>
                </Card>
            </SimpleGrid>
            {/* <button onClick={() => onRemove(product)}>Удалить</button> */}
        </div>
    );
}

export default FavoriteProductItem