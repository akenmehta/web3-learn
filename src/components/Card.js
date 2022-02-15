import { React, styled } from "../vendor";
import { Constants } from "../settings";

const Card = props => {
  const { name, url, description, type } = props;

  return (
    <CardWrapper>
      <AssetWrapper>
        {type === Constants.IMAGE_TYPE && <img src={url} alt={name} />}
        {type === Constants.VIDEO_TYPE && <video autoplay>
            <source src={url} type="video/mp4" />
          </video>}
      </AssetWrapper>

      <ContentWrapper>
        <h3>{name}</h3>
        <p>{description?.substring(0, 160)}{description?.length > 160 && '...'}</p>
      </ContentWrapper>
    </CardWrapper>
  )
};

const CardWrapper = styled.div`
  width: 370px;
  margin-bottom: 25px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const AssetWrapper = styled.div`
  height: 350px;

  img,
  video {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

const ContentWrapper = styled.div`
  padding: 2px 16px;

  p {
    word-break: break-word;
  }
`;

export { Card }