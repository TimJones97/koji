import React from 'react';
import { JobsList } from '@dospore/job-board';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
      margin: 'auto'
  },
  text: {
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      paddingBottom: `${theme.spacing(1)}px`,
      paddingTop: `${theme.spacing(1)}px`,
    }
  },
  discord: {
      fontWeight: 600
  }
}));

const Jobs = ({ jobs }) => {
    const styles = useStyles();
    return (
        jobs.length 
            ?
                <JobsList 
                    jobs={jobs.map((job) => job.node.frontmatter)} 
                    roleTypes={["All Roles", "Engineering", "Legal", "Marketing", "Design"]} 
                />
            :
                <Container className={styles.root}>
                    <p className={styles.text}>
                        Sorry, we are not currently hiring at the moment. If you would like to reach out to us for any future jobs, <br/> 
                        reach out to us on <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/kvJEwfvyrW" className={styles.discord}>discord</a>.
                    </p>
                </Container>
    )
}

export default Jobs;