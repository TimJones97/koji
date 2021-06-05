import React from 'react';
import Logo from '../components/logo';
import Seo from '../components/seo';
import Arrow from '../components/arrow'
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

const MainButton = withStyles(theme => (
    {
        root: {
            transition: '0.5s',
            letterSpacing: '1px',
            border: '2px solid #FFFFFF',
            borderRadius: '30px',
            width: '100%',
            display: 'flex',
            backgroundColor: 'transparent',
            color: 'white',
            padding: '2vh',
            margin: '1rem 0',

            [theme.breakpoints.down('md')]: {
                margin: '0.5rem 0'
            },

            '& a': {
                display: 'flex',
                width: '100%'
            },

            '&:focus': {
                outline: 'none'
            },

            '&:hover': {
                cursor: 'pointer',
                boxShadow: '0 0 2px 2px #fff',
                transition: '0.5s'
            }
        }
    })
)(
    ({
        classes, link, text
    }) => {
        return (
            <a target="_blank" className={classes.root} rel="noreferrer noopener" href={link}>
                {text}
                <Arrow />
            </a>

        )
    }
)

const IndexPage = () => {
  return (
    <>
        <Seo />
        <div className="main-container">
            <div className="main-content">
                <Logo />
                <MainButton text="Apply to Govern" link="https://tracer-finance.typeform.com/to/zHrUFNEn" />
                <MainButton text="Apply to Test" link="https://tracer-finance.typeform.com/to/CLDvv8H7" />
            </div>
            <div className="main-footer">
                <links>
                    <Link className="link" to="/whitepapers">
                        Whitepapers
                        <span className="arrow">
                            <Arrow />
                        </span>
                    </Link>
                    <a className="link" target="_blank" rel="noreferrer noopener" href="https://gov.tracer.finance">
                        Governance
                        <span className="arrow">
                            <Arrow />
                        </span>
                    </a>
                    <Link className="link" to="/radar">
                        Radar
                        <span className="arrow">
                            <Arrow />
                        </span>
                    </Link>
                </links>
                <socials>
                    <div style={{marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', paddingRight: '5vw'}}>
                        <a target="_blank" rel="noreferrer noopener" href="https://discourse.tracer.finance/">
                            <img className="social" src="/icons/discourse.png" alt="discourse-logo"/>
                        </a>
                        <a target="_blank" rel="noreferrer noopener" href="https://tracer-finance.medium.com/">
                            <img className="social" src="/icons/medium.png" alt="medium-logo"/>
                        </a>
                        <a target="_blank" rel="noreferrer noopener" href="https://github.com/tracer-protocol">
                            <img className="social" src="/icons/github.png" alt="github-logo"/>
                        </a>
                        <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/kvJEwfvyrW">
                            <img className="social" src="/icons/discord.png" alt="discord-logo"/>
                        </a>
                        <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/tracer_finance">
                            <img className="social" src="/icons/twitter.png" alt="twitter-logo"/>
                        </a>
                    </div>
                </socials>
            </div>
        </div>
    </>
  )
}

export default IndexPage;