import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import frFR from "date-fns/locale/fr"; // Import French locale
import "react-big-calendar/lib/css/react-big-calendar.css";

// Define the locales
const locales = {
  "fr-FR": frFR,
};

// Initialize the localizer with French locale
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Define messages for French localization
const messages = {
  date: "Date",
  time: "Heure",
  event: "Événement",
  allDay: "Toute la journée",
  week: "Semaine",
  work_week: "Semaine de travail",
  day: "Jour",
  month: "Mois",
  previous: "Précédent",
  next: "Suivant",
  today: "Aujourd'hui",
  agenda: "Agenda",
  noEventsInRange: "Aucun événement dans cette plage.",
  showMore: (count) => `+ ${count} de plus`,
};

const Myevents = [
  {
    title: "Réunion",
    start: new Date(2025, 0, 15, 10, 0),
    end: new Date(2025, 0, 15, 12, 0),
  },
  {
    title: "Déjeuner",
    start: new Date(2025, 0, 16, 13, 0),
    end: new Date(2025, 0, 16, 14, 30),
  },
];

const CalendarDash = () => {
  const [events, setEvents] = useState(Myevents);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleAddEvent = () => {
    const start = new Date(newEvent.start);
    const end = new Date(newEvent.end);
    setEvents([...events, { title: newEvent.title, start, end }]);
    setNewEvent({ title: "", start: "", end: "" });
  };
  return (
    <div className="p-8 py-12">
      <div>
        <h3>Formulaire d'ajout d'evenement</h3>
        <input
          type="text"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          placeholder="titre de l'evenement"
        />
        <input
          type="datetime-local"
          value={newEvent.start}
          onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
          placeholder="date de debut"
        />
        <input
          type="datetime-local"
          value={newEvent.end}
          onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
          placeholder="date de fin"
        />
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white rounded px-2 "
        >
          Ajouter
        </button>
      </div>

      <h2>Calendrier</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        culture="fr-FR" // Specify the culture for French
        messages={messages} // Provide the French translations for UI text
      />
    </div>
  );
};

export default CalendarDash;
