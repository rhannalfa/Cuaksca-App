/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author weatherapp6 <yulialestariningsing@gmail.com>
 */

'use strict';

export const weekDayNames = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu"
];

export const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10, Jan"
 */
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
}

/**
 * @param {number} mps Metter per seconds
 * @returns {number} Kilometer per hours
 */
export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000;
}

export const aqiText = {
  1: {
    level: "Bagus",
    message: "Kualitas udara dianggap memuaskan, dan polusi udara hanya menimbulkan sedikit risiko atau bahkan tidak sama sekali"
  },
  2: {
    level: "Layak",
    message: "Kualitas udara dapat diterima; namun, untuk beberapa polutan mungkin terdapat masalah kesehatan yang moderat bagi sejumlah kecil orang yang sangat sensitif terhadap polusi udara."
  },
  3: {
    level: "Sedang",
    message: "Bebarapa orang sensitif mungkin mengalami dampak kesehatan. Masyarakat umum kemungkinan besar tidak akan terpengaruh."
  },
  4: {
    level: "Buruk",
    message: "Setiap orang mungkin mulai mengalami dampak kesehatan; anggota kelompok sensitif mungkin mengalami dampak kesehatan yang lebih serius"
  },
  5: {
    level: "Sangat Buruk",
    message: "Peringatan kesehatan tentang kondisi darurat. Seluruh populasi lebih mungkin terkena dampaknya."
  }
}