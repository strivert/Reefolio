import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

export const Row = styled.div`
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
`;

export const Avatar = styled.img`
  width: 54px;
  height: 54px;
`;

export const VideoPanel = styled.img`
  margin-top: 1rem;
  width: 100%;
`;

export const EditButton = styled(Button) ({
  color: '#4441D3',
  borderColor: '#4441D3',
  textTransform: 'none',
  fontSize: '10px',
});

export const Name = styled.div`
  color: black;
  // font-family: "GT America";
  font-weight: 500;
  font-style: normal;
  font-size: 30px;
  line-height: 109.5%;
  letter-spacing: -0.04em;
`;

export const Job = styled.div`
  font-family: "GT America";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 109.5%;
  letter-spacing: -0.04em;
  color: #4441D3;
  padding-top: 5px;
`;

export const Description = styled.div`
  font-family: Plain;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  color: #131313;
`;

export const PlayButton = styled(IconButton) ({
  color: '#FFFFFF',
  backgroundColor: 'rgba(255, 255, 255, 0.22)',
  position: 'absolute',
  left: 40,
  top: 60
});

export const VideoTime = styled.span`
  position: absolute;
  color: white;
  top: 50px;
  right: 40px;
`;

export const VideoEditButton = styled(Button) ({
  color: 'white',
  borderColor: 'white',
  textTransform: 'none',
  fontSize: '10px',
  position: 'absolute',
  padding: 0,
  width: 40,
  minWidth: 40,
  height: 20,
  right: 40,
  top: 240
});

export const SkillButton = styled(Button) ({
  color: 'black',
  borderColor: 'black',
  textTransform: 'none',
  fontSize: '10px',
  borderRadius: '20px',
  padding: '2px 8px',
  margin: '0 3px'
});

export const LocationButton = styled(Button) ({
  color: '#4441D3',
  backgroundColor: 'rgba(153, 151, 236, 0.22)',
  fontSize: 10
});

export const MapBox = styled.div`
  height: 150px;
  background-color: #E9E9E9;
  line-height: 150px;
  font-size: 16px;
  text-align: center;
`;

export const WorkPanel = styled.div`
`;

export const AddWorkPanel = styled.div`
  height: 120px;
  text-align: center;
  line-height: 120px;
  color: #888888;
  font-size: 13px;
  border: 1px solid #BEBEBE;
`;

export const WorkImg = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.div`
  color: black;
  font-family: "GT America";
  font-style: "Condensed Medium";
  font-size: 13px;
`;

export const ProjectName = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "GT America";
  font-style: Regular;
  font-size: 10px;
`;

export const EmptyCredit = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.17);
  height: 50px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
  line-height: 50px;
  margin: 0 0 10px 0;
`;

export const Credit = styled.div`
  margin: 0 0 10px 0;
  display: grid;
  grid-template-columns: 70px auto;
`;

export const CreditImg = styled.img`
  width: 62px;
  height: 44px;
`;

export const CreditText = styled.div`
  padding: 10px 15px 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.17);
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const CreditDetail = styled.div`
`;

export const CreditYear = styled.div`
  color: rgba(57, 57, 57, 0.6);
  font-size: 10px;
`;

export const IconButtonEl = styled(IconButton) ({
  color: '#4441D3',
  padding: 0,
  margin: '0 10px',
  float: 'right'
});