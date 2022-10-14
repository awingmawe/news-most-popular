import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BasicCard({data}:{data:any}) {
  return (
    <Card sx={{ width:'100%', mb:2 }}>
       <Link href={data.url}>
        <a target={"_blank"}>
            <CardHeader
                title={data.title}
                subheader={`${data.published_date}, ${data.byline} `}
                sx={{cursor:"pointer"}}
                titleTypographyProps= {
                    {
                        fontSize: {xs:16}
                    }
                }
                subheaderTypographyProps= {
                    {
                        fontSize:{xs:12}
                    }
                }
            />
        </a>
      </Link>
      <CardMedia
        component="img"
        sx={{objectFit:'contain'}}
        height={data.media[0]? data.media[0]['media-metadata'][2].height : ''}
        image={data.media[0]? data.media[0]["media-metadata"][2].url : ''}
        alt={data.media[0]? data.media[0]["media-metadata"][2].copyright : ''}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           {data.abstract}
        </Typography>
      </CardContent>
    </Card>
  );
}
