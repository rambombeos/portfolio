import { Grid, Typography } from '@mui/material';
import React from 'react';
import complead_img from '../../../assets/img/comp-lead.png';
import miltstark_img from '../../../assets/img/milt-stark.png';
import { CustomExpandableCard } from '../../Card/CustomCard';
import { PortfolioWrapper } from '../style';

export const Portfolio = () => {
    const description = 'Created this website using Squarespace with some modification in HTML and CSS that so we cannot be limited in the feature given by the CRM.'

    return (
        <PortfolioWrapper elevation={1}>
            <Grid container >
                <Grid item xs={12} sx={{ textAlign: 'center', }}>
                    <Typography color='primary' variant='h3' m={5}>PORTFOLIO</Typography>
                </Grid>
                <Grid container spacing={4} xs={12}>
                    <Grid item xs={12} md={6} lg={4} >
                        <CustomExpandableCard
                            image={complead_img}
                            title={'Client Website'}
                            link={'https://www.competent-leaders.com/'} 
                            codeLinkDisabled={true}
                            websiteTitle={'Consulting Company'}
                            description={description}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}> 
                        <CustomExpandableCard
                            image={miltstark_img}
                            title={'Client Website'} 
                            codeLinkDisabled={true}
                            linkDisabled={true}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <CustomExpandableCard
                            image={complead_img}
                            title={'Client Website'}
                            link={'https://www.competent-leaders.com/'} 
                            codeLinkDisabled={true}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}> 
                        <CustomExpandableCard
                            image={miltstark_img}
                            title={'Client Website'} 
                            codeLinkDisabled={true}
                            linkDisabled={true}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <CustomExpandableCard
                            image={complead_img}
                            title={'Client Website'}
                            link={'https://www.competent-leaders.com/'} 
                            codeLinkDisabled={true}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <CustomExpandableCard
                            image={miltstark_img}
                            title={'Client Website'} 
                            codeLinkDisabled={true}
                            linkDisabled={true}/>
                    </Grid>

                </Grid>
            </Grid>
        </PortfolioWrapper>
    )
}
