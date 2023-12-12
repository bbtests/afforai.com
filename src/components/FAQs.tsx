import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQs() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            {
                [
                    {
                        question: "Is Afforai free?",
                        answer: "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits",
                    },
                    {
                        question: "What are subscription credits versus permanent credits?",
                        answer: "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.",
                    },
                    {
                        question: "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
                        answer: "Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
                    },
                    {
                        question: "Does Afforai support uploading images and video?",
                        answer: "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.",
                    },
                    {
                        question: "Does Afforai support collaboration between accounts?",
                        answer: "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.",
                    },
                    {
                        question: "Is my data secured?",
                        answer: "Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.",
                    },
                ].map((faq, i) => <Accordion sx={{
                    my: 2,
                    border: (theme) => `1px solid ${theme.palette.tertiary.light}`,
                    boxShadow: "none"
                }}
                    key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${i}bh-content`}
                        id={`panel${i}bh-header`}
                    >
                        <Typography fontWeight={600}>
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
                )
            }
        </div>
    );
}