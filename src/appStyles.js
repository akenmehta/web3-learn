import { createGlobalStyle } from './vendor';
import { fontSizes, fontFamilies, fontWeights, colors } from "./settings";

const AppStyles = createGlobalStyle`
     html{
        font-size: ${fontSizes.baseFontSize};           
    }

     *,*:before,*:after  {
        box-sizing: border-box;
    }
  
    body {
        font-size: ${fontSizes.f16};
        background: ${colors.grays.concrete};
        font-family: ${fontFamilies.neueHaasUnica};        
        color: ${colors.grays.mineShaft};        
        line-height: 1.7;       
    }

    h1, h2{
        line-height: 1.2;
    }

    a, button{
        cursor: pointer;
        color: inherit;
    }

    a{
        text-decoration: none;        
    }
    
    strong{
        font-weight: ${fontWeights.semiBold};
    }
    
    p {
        line-height: 1.5;
        margin-bottom: 10px;
    }
        
	img{
		max-width: 100%;
		height: auto;
    }
`;

export { AppStyles };
