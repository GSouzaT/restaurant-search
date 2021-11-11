import React from "react";
import styled, { keyframes } from "styled-components";
import { defaults } from "../../../../../../../../AppData/Local/Microsoft/TypeScript/4.4/node_modules/browserslist/index";

const KeyFrameLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const LoadingSkeleton = styled.div`
    background-color: gray;
    border-radius: 6px;
    margin-bottom: 10px;
    min-width: ${(props) => props.width};
    min-height: ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height}) => <LoadingSkeleton width={width} height={height} />;