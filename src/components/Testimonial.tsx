import { Avatar, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { url } from 'router/url';
import ProductHunt from 'images/icons/producthunt.svg';
import testimonial from 'data/testimonial';


const CustomCard = ({ card }: { card: typeof testimonial[0] }) => {
    return <>
        <Card sx={{ width: 550 }} >
            <CardActionArea>
                <CardContent sx={{ height: 250 }}>
                    <Typography gutterBottom component="div">
                        {card.description}
                    </Typography>
                    <hr />
                    <CardActions>
                        <Typography className='col-12 d-flex justify-content-between align-items-center'
                            sx={{ fontSize: 14 }}
                            component={"div"}
                        >
                            <div className='d-flex align-items-center'
                            >
                                <Avatar src={card.img} />
                                <div className='ms-1'>{card.title}</div>
                            </div>
                            <Link to={url.pricing} className='px-1 btn btn-orange d-flex align-items-center' color="primary">
                                <img className='me-1' src={ProductHunt} alt="Product Hunt" />
                                View on Product Hunt</Link>
                        </Typography>
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card></>
}

export default function Testimonial() {

    return <div className='d-flex flex-column'>
        <Typography component={"div"} >
            <swiper-container
                free-mode
                space-between={20}
                watch-slides-progress
                resize-observer
                centered-slides
                centered-slides-bounds
                disable-on-interaction={false}
                autoplay
                speed={20000}
                loop
                slides-per-view={"auto"}
            >
                {
                    testimonial.map((card, i) => (
                        <swiper-slide key={i}>
                            <CustomCard {...{ card }} />
                        </swiper-slide>
                    ))
                }
            </swiper-container>
        </Typography >
        <Typography component={"div"} >
            <swiper-container
                free-mode
                space-between={20}
                watch-slides-progress
                resize-observer
                centered-slides
                centered-slides-bounds
                disable-on-interaction={false}
                autoplay
                speed={20000}
                dir="rtl"
                loop
                slides-per-view={"auto"}
            >
                {
                    testimonial.map((card, i) => (
                        <swiper-slide key={i}>
                            <CustomCard {...{ card }} />
                        </swiper-slide>
                    ))
                }
            </swiper-container>
        </Typography >
    </div>
}