import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { colors } from "../styles/style";
import styled from "styled-components";

const ChartBox = styled.div`
  height: 400px;
  padding: 20px;
  margin-bottom: 30px;
`;

const getDatas = (labels, datas) => ({
  labels: labels,
  datasets: [
    {
      label: "직업가치관 결과",
      data: datas,
      backgroundColor: "rgba(0, 145, 234, 0.2)",
    },
  ],
});

const getOptions = () => ({
  animation: false,
  events: [],
  //scales 옵션만 적용이 안됨
  scales: {
    y: {
        suggestedMin: 0,
        suggestedMax: 10,
        stepSize: 1,
      },
      x: 
      {

          fontColor: `${colors.gray800}`,
          fontSize: 16,
      },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
});

const ValueChart = ({ valueData }) => {
  console.log(valueData);
  const canvasDom = useRef(null);

  const data = [...valueData].sort();
  const labels = data.map(item => item[1]);
  const datas = data.map(item => Number(item[2]));

  useEffect(() => {
    let ctx = canvasDom.current.getContext("2d");
    console.log(ctx);

    const chart = new Chart(ctx, {
      type: "bar",
      data: getDatas(labels, datas),
      options: getOptions(),
    });
    return () => chart.destroy();
  }, []);

  return (
    <ChartBox>
      <canvas ref={canvasDom}></canvas>
    </ChartBox>
  );
};

export default ValueChart;
