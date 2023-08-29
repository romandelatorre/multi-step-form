import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Title } from '../styles/styles';
import { BoxComponent } from '../styles/styles';
import { FormContext } from '../Components/Context';

function Summary() {
  const { isMobile } = useContext(FormContext);

  return (
    <BoxComponent>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          mt: 5.5,
          p: 2,
        }}
      >
        <Box
          component="img"
          alt="check"
          src="check.svg"
          sx={{ mb: isMobile ? 2 : 0, width: isMobile ? '50px' : '70px' }}
        />
        <Title sx={{ mt: { sm: 0, md: 5 } }}>Thank you!</Title>
        <Typography
          variant="subtitle2"
          align="justify"
          color="#9699AA"
          sx={{
            mt: 2,
          }}
        >
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Typography>
      </Stack>
    </BoxComponent>
  );
}

export default Summary;
