import { Grid, Typography } from '@mui/material';
import React from 'react';
import complead_img from '../../../assets/img/comp-lead.png';
import miltstark_img from '../../../assets/img/milt-stark.png';
import portfolio_img from '../../../assets/img/portfolio.png';

import { CardsData } from '../../../db/fedb';
import { CustomExpandableCard } from '../../Card/CustomCard';
import { PortfolioWrapper } from '../style';

export const Portfolio = () => {
    const [firstCard, secondCard, thirdCard] = CardsData;



    return (
        <PortfolioWrapper elevation={1} id='portfolio-section'>
            <Grid container >
                <Grid item xs={12} sx={{ textAlign: 'center', }}>
                    <Typography color='primary' variant='h3' m={5}>PROJECTS</Typography>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item xs={12} md={6} lg={4} >
                        <CustomExpandableCard
                            image={complead_img}
                            title={firstCard.title}
                            link={firstCard.link}
                            websiteTitle={firstCard.projectName}
                            description={firstCard.description}
                            codeLinkDisabled={true} 
                            /* linkDisabled={true} *//>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <CustomExpandableCard
                            image={portfolio_img}
                            title={thirdCard.title}
                            link={thirdCard.link}
                            websiteTitle={thirdCard.projectName}
                            description={thirdCard.description}
                            codeLink={thirdCard.code_link}
                            /* codeLinkDisabled={true} */ 
                            /* linkDisabled={true} *//>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <CustomExpandableCard
                            image={miltstark_img}
                            title={secondCard.title}
                            link={secondCard.link}
                            websiteTitle={secondCard.projectName}
                            description={secondCard.description}
                            codeLinkDisabled={true} 
                            linkDisabled={true}/>
                    </Grid>

                </Grid>
            </Grid>
        </PortfolioWrapper>
    )
}
