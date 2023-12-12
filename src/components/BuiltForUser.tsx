import { Card, Chip, ImageList, ImageListItem, Typography, } from "@mui/material"
import builtForUser from "data/builtForUser";


function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const BuiltForUser = () => {
    return <>
        <ImageList variant="quilted" rowHeight={300} cols={7} gap={15}>
            {builtForUser.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <div className="h-100 p-1">
                        <Card sx={{ height: "100%" }}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            <Typography component={"div"} className="p-2" sx={{ fontSize: 12 }} >
                                <Typography className="d-flex" component={"div"}>
                                    <h6>{item.title}</h6>
                                    {item.isNew &&
                                        <Chip sx={{
                                            "& span": { p: 0, },
                                            padding: "0.25rem 0.5rem",
                                            borderRadius: 2.5,
                                            background: "#efe6ff",
                                            color: "#6004ff",
                                            fontSize: 9,
                                            fontWeight: 500,
                                            height: 16,
                                        }} label="NEW" />
                                    }
                                </Typography>
                                <p>{item.description}</p>
                            </Typography>
                        </Card>
                    </div>
                </ImageListItem>
            ))}
        </ImageList>
    </>
}

export default BuiltForUser