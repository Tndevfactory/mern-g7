import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Chart from "react-apexcharts";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { fr } from "date-fns/locale/fr";
import Dataset from "./Dataset";
registerLocale("fr", fr);

const Dashboard = () => {
  const { log } = console;
  const dataSet = [
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 830,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2022-10-05T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 930,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2022-06-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 1230,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2022-06-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 3530,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2022-07-05T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 5530,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2022-07-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 220,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2022-08-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 2330,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2023-08-05T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 1630,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2023-08-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 5230,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2023-09-05T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 11530,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2023-09-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 14530,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2023-10-05T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 12530,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2023-10-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 22530,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2024-08-05T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 87530,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2024-08-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 41530,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2024-09-05T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 130,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2024-09-20T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 30,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2024-10-05T15:48:16.405Z",
    },
    {
      _id: "67152640eb3783931fd31228",
      totalHT: 4777,
      tva: 100.7,
      totalTTC: 638.7,
      status: 1,
      user: {
        _id: "671514e71a46f1b9adfaa267",
        name: "Karim",
      },
      createdAt: "2024-10-20T15:48:16.405Z",
    },
  ];
  const box = [
    { id: 1, name: "Ventes", value: 0, trend: "positive" },
    { id: 2, name: "Commandes", value: 0, trend: "positive" },
    { id: 3, name: "Moyenne Cmd", value: 0, trend: "positive" },
    { id: 4, name: "Max commandes", value: 0, trend: "positive" },
  ];
  const [boxResult, setBoxResult] = useState(box);
  const y = new Date().getFullYear();
  const [startDate, setStartDate] = useState(new Date(y - 1, 0, 1));
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDataset, setSelectedDataset] = useState([]);

  const graph1 = {
    options: {
      chart: {
        id: "totalHT-histogram",
      },
      xaxis: {
        categories: [2022, 2023, 2024],
      },
    },
    series: [
      {
        name: "Total hors taxe",
        data: [12270, 47780, 156527],
      },
    ],
  };

  const graph2 = {
    chart: {
      type: "donut",
    },
    labels: [2022, 2023, 2024],
    legend: { position: "bottom" },
    series: [12270, 47780, 156527],
  };

  const [graph, setGraph] = useState(graph1);
  const [pieGraph, setPieGraph] = useState(graph2);

  const transformData = (data) => {
    const yearlyTotal = {};
    data.forEach((v) => {
      const y = new Date(v.createdAt).getFullYear();
      yearlyTotal[y] = (yearlyTotal[y] || 0) + v.totalHT;
    });
    const categories = Object.keys(yearlyTotal).sort();
    const seriesData = categories.map((y) => yearlyTotal[y]);

    setGraph({
      options: {
        chart: {
          id: "totalHT-histogram",
        },
        xaxis: {
          categories: categories,
        },
        title: {
          text: "Cumul Total HT par année",
          align: "center",
        },
      },
      series: [
        {
          name: "Total hors taxe",
          data: seriesData,
        },
      ],
    });
    setPieGraph({
      chart: {
        type: "donut",
      },
      labels: categories,
      legend: { position: "bottom" },
      series: seriesData,
    });
  };

  const recalculerBoxResult = (data) => {
    const totalVentes = data.reduce((acc, curr) => acc + curr.totalHT, 0);
    const commandes = data.length;
    const moyVentes = (totalVentes / data.length).toFixed(3);
    const maxCmd = data.reduce(
      (max, item) => (item.totalHT > max ? item.totalHT : max),
      0
    );
    setBoxResult([
      {
        id: 1,
        name: "Ventes",
        value: totalVentes,
        trend: totalVentes > 156528 ? "positive" : "negative",
      },
      {
        id: 2,
        name: "Commandes",
        value: commandes,
        trend: commandes > 10 ? "positive" : "negative",
      },
      {
        id: 3,
        name: "Moyenne Cmd",
        value: moyVentes,
        trend: moyVentes < 12500 ? "negative" : "positive",
      },
      {
        id: 4,
        name: "Max commandes",
        value: maxCmd,
        trend: maxCmd < 50600 ? "negative" : "positive",
      },
    ]);
  };

  const handleFilter = () => {
    const filtredData = dataSet.filter((item) => {
      const itemdate = new Date(item.createdAt);
      return itemdate >= startDate && itemdate <= endDate;
    });

    setSelectedDataset(filtredData);
    recalculerBoxResult(filtredData);
    transformData(filtredData);
  };

  useEffect(() => {
    handleFilter();
  }, []);

  return (
    <div className="p-4">
      <div id="date" className="flex justify-start">
        <DatePicker
          locale="fr"
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="mx-2 p-1 border rounded border-gray-500 bg-gray-100 text-center "
        />
        <DatePicker
          locale="fr"
          dateFormat="dd/MM/yyyy"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="mx-2 p-1 border rounded border-gray-500 bg-gray-100 text-center "
        />
        <button
          onClick={handleFilter}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 p-1 rounded"
        >
          Valider
        </button>
      </div>
      <div
        id="box"
        className=" mt-8 flex justify-between items-center flex-wrap gap-2 px-14"
      >
        {boxResult.map((v) => (
          <div
            key={v.id}
            className={` ${
              v.trend == "positive" ? "bg-green-100/50" : "bg-red-100/50"
            }    min-w-44 min-h-16 rounded shadow-xl flex flex-col border justify-center items-center `}
          >
            <span className="text-[16px] font-[500] uppercase">{v.name}</span>
            <span className="text-sm text-gray-800">{v.value}</span>
          </div>
        ))}
      </div>
      <div
        id="graphs"
        className="mt-[5rem] flex justify-center gap-[15rem] items-center"
      >
        <div>
          <Chart
            options={graph.options}
            series={graph.series}
            type="bar"
            width="500"
          />
        </div>
        <div className="hidden md:block">
          <Chart
            options={pieGraph}
            series={pieGraph.series}
            type="donut"
            width="450"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
