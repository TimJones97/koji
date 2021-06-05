import React from 'react';
import Layout from '../components/layout'
import Banner from '../components/banner';
import PDF from '../components/pdf';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    whitepapers: {
        height: '100%',
        flexWrap: 'wrap',
        display: 'flex!important',
        marginTop: '-3vh',
        zIndex: 2,
        margin: 'auto'
    },
    whitepaper: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '2rem'
    }
}))

const Whitepaper = () => {
    const styles = useStyles();
    const pdfs = [
        {
            link: '/whitepapers/tracer/Tracer_Whitepaper.pdf',
            preview: '/whitepapers/tracer/tracer.jpg',
            title: 'Tracer: Peer-to-Peer Finance'
        },
        {
            link: '/whitepapers/perp-swaps/Tracer_Perpetual_Swaps.pdf',
            preview: '/whitepapers/perp-swaps/perp-swaps.jpg',
            title: 'Tracer: Perpetual Swaps'
        },
    ]

    const seo = {
        metaTitle: "Tracer Whitepapers",
        metaDescription: "Learn more about the Tracer ecosystem through whitepapers",
        shareImage: {childImageSharp: {original: { src: '/tcr_banner.png'}}},
        article: false,
    }

    return (
        <Layout seo={seo}>
            <Banner title={'Whitepapers'} subTitle={"Learn more about the Tracer ecosystem through whitepapers"} />
            <Container container className={styles.whitepapers}>
                {pdfs.map((pdf) => 
                    <Grid xs={12} md={4} className={styles.whitepaper}>
                        <PDF {...pdf} />
                    </Grid>
                )}
            </Container>
        </Layout>
    )
}

export default Whitepaper;
