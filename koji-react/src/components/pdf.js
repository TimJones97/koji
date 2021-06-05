import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:hover $link' : {
            color: '#000CBD',
            textDecoration: 'underline',
            opacity: 0.5
        },
        '&:hover $preview img' : {
            opacity: 0.75,
        },
        '&:hover $download': {
            boxShadow: '0px 3px 6px #0000004D',
            border: '1px solid #0067E3',
            background: '#0067E3 0% 0% no-repeat padding-box',
            cursor: 'pointer'
        }
    },
    link: {
        font: 'normal normal normal 18px/42px Akkurat',
        letterSpacing: '-0.72px',
        color: '#0000bd',
    },
    preview: {
        boxShadow: '0px 3px 6px #00000033',
        border: '1px solid #DDDDDD',
        background: 'white',
        borderRadius: '10px',
        opacity: 1,
        width: '259px',
        height: '366px',
        [theme.breakpoints.down('sm')]: {
            width: '231px',
            height: '326px'
        },
        '& img': {
            borderRadius: '10px'
        }
    },
    download : {
        background: '#0000BD 0% 0% no-repeat padding-box',
        border: '1px solid #000CBD',
        borderRadius: '10px',
        color: '#fff',
        width: '50%',
        height: '50px',
    }
}))
const PDF = ({ link, preview, title }) => {
    const styles = useStyles();
    return (
        <a target="_blank" rel="noreferrer noopener" href={link} className={styles.root}>
            <div className={styles.preview}>
                <img src={preview} alt={`pdf-${title}`}/>
            </div>
            <a target="_blank" rel="noreferrer noopener" href={link} className={styles.link}>{title}</a>
            <button className={styles.download}>Download</button>
        </a>
    )
}

export default PDF;