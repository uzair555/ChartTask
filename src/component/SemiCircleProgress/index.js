import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg';

const SemiCircleProgress = ({
  strokeWidth,
  percentage,
  strokeColor,
  size,
  strokeLinecap,
  percentageSeperator,
  fontStyle,
  hasBackground = false,
  bgStrokeColor,
}) => {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  if (isNaN(strokeWidth) || strokeWidth <= 0) {
    throw new Error("Stroke width must be a positive number");
  }

  if (
    isNaN(size.width) ||
    size.width <= 0 ||
    isNaN(size.height) ||
    size.height <= 0
  ) {
    throw new Error("Size must be a positive number");
  }

  const radius =50 - strokeWidth / 2;
  const circumference = 1.1 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const bgStrokeDashoffset = circumference - 1 * circumference;
  const pathDescription = "M5,64 a1,1 0 0,1 90,0";
  

  return (
    <View>
      <Svg width={size.width} height={size.height} viewBox="0 0 100 100">
        
        <Path
          cx="45"
          cy="45"
          r="32"
          d={pathDescription}
          style={{
            transition: "stroke-dashoffset 0.35s",
            stroke: strokeColor || "#04001b",
            strokeLinecap: strokeLinecap || "round",
            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${strokeDashoffset}`,
            strokeWidth: `${strokeWidth}`,
          }}
          fill="none"
        />
        <SvgText
          x="52%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fontFamily="Arial"
          fill="#04001b"
          {...fontStyle}
        >
          {percentage}
          {percentageSeperator || "%"}
        </SvgText>
      </Svg>
    </View>
  );
};

export default SemiCircleProgress;
