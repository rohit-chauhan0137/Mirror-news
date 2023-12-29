import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const CardComp = ({...props}) => {

  const {title, sourceUrl, imageUrl, description, content, publishedAt} = props;

  return (
    <Card sx={{ maxWidth: '90%' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={publishedAt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Source: <a target='_blank' href={sourceUrl} content={content}>{sourceUrl}</a> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <img src={imageUrl} alt={title}/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {content}
        </Typography>
      </CardContent>
    </Card>
  );
}