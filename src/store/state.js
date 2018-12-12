let defaltcity = '上海'
try {
  if (localStorage.city) {
    defaltcity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaltcity
}