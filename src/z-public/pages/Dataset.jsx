import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Dataset = () => {
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
  const { log } = console;
  const [data, setData] = useState(dataSet);
  const [selectedData, setSelectedData] = useState(dataSet);
  const [boxResult, setBoxResult] = useState([
    { name: "Total ht", value: 5689.0 },
    { name: "Moyenne ht", value: 59689.0 },
    { name: "Max ht", value: 125689.0 },
  ]);
  const [graph, setGraph] = useState({
    options: {
      chart: { id: "basic-bar" },
      xaxis: { categories: [2022, 2023, 2024] },
      title: {
        text: "Cumul Total HT Par Annee", // Chart title text
        align: "center", // Alignment: left, center, or right
        margin: 10, // Space around the title
        style: {
          fontSize: "18px", // Font size
          fontWeight: "bold", // Font weight: light, normal, bold
          fontFamily: "Arial, sans-serif", // Font family
          color: "#333", // Title color
        },
      },
    },
    series: [{ name: "Total HT", data: [22125, 44550, 154000] }],
  });
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const recalculateBoxResult = (data) => {
    if (!data || data.length === 0) {
      setBoxResult([
        { name: "Total ht", value: 0 },
        { name: "Moyenne ht", value: 0 },
        { name: "Max ht", value: 0 },
      ]);
      return;
    }

    const totalHt = data
      .reduce((acc, curr) => acc + curr.totalHT, 0)
      .toFixed(3);
    const avgHt = (totalHt / data.length).toFixed(3);
    const maxHt = data
      .reduce((acc, curr) => Math.max(acc, curr.totalHT), 0)
      .toFixed(3);

    setBoxResult([
      { name: "Total ht", value: totalHt },
      { name: "Moyenne ht", value: avgHt },
      { name: "Max ht", value: maxHt },
    ]);
  };

  const transformData = (data) => {
    const yearlyTotals = {};
    const yearlyCounts = {};

    data.forEach((v) => {
      const year = new Date(v.createdAt).getFullYear();
      yearlyTotals[year] = (yearlyTotals[year] || 0) + v.totalHT; // cumul value by year
      yearlyCounts[year] = (yearlyCounts[year] || 0) + 1; // Count entries per year
    });

    const categories = Object.keys(yearlyTotals).sort();
    const seriesData = categories.map((year) => yearlyTotals[year]); // get the cumul data for each year

    // const seriesData = categories.map((year) => yearlyCounts[year]);   //// get the cumul count data for each year

    // const seriesData = categories.map((year) => {
    //   return (yearlyTotals[year] / yearlyCounts[year]).toFixed(2); // Compute the average by year
    // });

    log(yearlyTotals);
    log(categories);
    log(seriesData);

    setGraph({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: categories,
        },

        title: {
          text: "Cumul Total HT Par Annee", // Chart title text
          align: "center", // Alignment: left, center, or right
          margin: 10, // Space around the title
          style: {
            fontSize: "18px", // Font size
            fontWeight: "bold", // Font weight: light, normal, bold
            fontFamily: "Arial, sans-serif", // Font family
            color: "#333", // Title color
          },
        },
      },

      series: [
        {
          name: "Cumul HT /an",
          data: seriesData,
        },
      ],
    });
  };

  const handleFilterData = () => {
    if (!form.startDate && !form.endDate) {
      setSelectedData(data);
      return;
    }

    const start = form.startDate ? new Date(form.startDate) : null;
    const end = form.endDate ? new Date(form.endDate) : null;

    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return (!start || itemDate >= start) && (!end || itemDate <= end);
    });

    setSelectedData(filteredData);
    transformData(filteredData);
    recalculateBoxResult(filteredData);
  };

  return (
    <div className="p-6">
      <div id="calendar" className="flex justify-start items-center gap-3">
        <div>
          <label htmlFor="startDate" className="block">
            Date de debut
          </label>
          <input
            onChange={handleChange}
            value={form.startDate}
            name="startDate"
            id="startDate"
            type="date"
            className="border p-1 rounded bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block">
            Date de fin
          </label>
          <input
            onChange={handleChange}
            value={form.endDate}
            name="endDate"
            id="endDate"
            type="date"
            className="border p-1 rounded bg-gray-100"
          />
        </div>
        <div>
          <button
            onClick={handleFilterData}
            className="
          bg-blue-500 hover:bg-blue-600
           text-white px-2 p-1 rounded mt-6"
          >
            Filtrer
          </button>
        </div>
      </div>
      <div>
        <div
          id="boxResult"
          className="flex justify-between flex-wrap items-center 
              gap-2 max-w-[50rem] mt-4"
        >
          {boxResult.map((v, i) => (
            <div
              key={i}
              className=" shadow-md shadow-gray-500 border-gray-300
                border bg-gray-50 min-w-52 min-h-24 rounded-lg p-2 text-xl uppercase font-semibold flex justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-gray-800/70">{v.name}</span>
                <span className="text-lg text-gray-800/60">{v.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-2 justify-start items-start">
          <div id="charts" className="p-2 mt-2">
            <h1 className="font-medium text-lg mb-2">Graphs</h1>
            <Chart
              options={graph.options}
              series={graph.series}
              type="bar"
              width="500"
            />
          </div>
          <div id="visual" className="p-2 mt-2">
            <h1 className="font-medium text-lg mb-2">Dataset</h1>
            {selectedData.map((v, i) => (
              <div key={i} className="gap-6 flex justify-start text-sm mb-1">
                <span className="w-16">{parseFloat(v.totalHT).toFixed(3)}</span>
                <span>
                  {new Date(v.createdAt).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataset;
