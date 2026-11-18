/* =========================================================
   NISHA GLOBAL — SITE CONTENT
   Edit this file to update the website. No coding needed:
   copy an entry, paste it at the TOP of its list, change the text.
   Dates use the format "YYYY-MM-DD".
   ========================================================= */

const SITE = {
  name: "Nisha Global",
  tagline: "One World • One Passion • All Sports",
  motto: "No Debate • Respect Every Sports Fan Worldwide",
  youtube: "https://www.youtube.com/@Nisha.global",
  tiktok: "https://www.tiktok.com/@nisha.global",
  email: "nishaglobaleducation@gmail.com",
};

/* Optional: YouTube video IDs to show in "Latest Videos".
   The ID is the part after "watch?v=" or after "/shorts/" in a video link.
   Leave empty [] to hide the section. */
const VIDEOS = [
  // "VIDEO_ID_1",
];

/* ---------------- LATEST NEWS ----------------
   category: Soccer | NFL | NBA | MLB | NHL
   source: link to where the news came from (shown as "Source")
   video: optional link to your own YouTube video about it */
const UPDATES = [
  {
    title: "Chargers edge Ravens 23-20 on Monday Night Football",
    category: "NFL",
    date: "2026-11-17",
    summary: "Los Angeles finally get their first win of the season in a tight prime-time battle.",
    body: "The Chargers picked up their first win of the 2026 season with a 23-20 victory over the Baltimore Ravens on Monday Night Football.\n\nElsewhere in the league, the injury list keeps growing: Lions edge rusher Aidan Hutchinson is expected to miss the rest of the season with a torn ACL, and reports say Patriots QB Drake Maye could also be done for 2026.",
    source: "https://www.nfl.com/news/series/around-the-nfl-news",
    video: ""
  },
  {
    title: "Giannis & Wemby named NBA Players of the Week",
    category: "NBA",
    date: "2026-11-17",
    summary: "Antetokounmpo led the Heat to a 3-0 week, while Wembanyama's Spurs went a perfect 4-0.",
    body: "Giannis Antetokounmpo averaged 33.7 points and 11.3 rebounds as Miami went 3-0, and Victor Wembanyama posted 27.5 points, 10.5 rebounds and 5 blocks a night as San Antonio went 4-0.\n\nThe Spurs and Celtics currently lead the league in net rating. On the rookie front, Warriors rookie Yaxel Lendeborg has climbed to No. 1 on the NBA.com Rookie Ladder at 21.4 points per game.",
    source: "https://www.nba.com/news/starting-5-november-15-2026",
    video: ""
  },
  {
    title: "Original Six Series: NHL celebrates 100 years of classic rivalries",
    category: "NHL",
    date: "2026-11-16",
    summary: "Rangers–Canadiens opened the centennial series, with Blackhawks–Maple Leafs and Red Wings–Bruins next.",
    body: "The Rangers hosted the Canadiens to mark 100 years since New York's first NHL game. The celebration continues with Chicago vs Toronto on November 17 and Detroit vs Boston on November 18.\n\nMeanwhile Connor McDavid has opened the season with a 21-game point streak for Edmonton, and NHL.com is following Alex Ovechkin's farewell tour.",
    source: "https://www.nhl.com/news/nhl-on-tap-news-and-notes-november-16-2026",
    video: ""
  },
  {
    title: "MLB Hot Stove: Skubal sweepstakes heats up",
    category: "MLB",
    date: "2026-11-17",
    summary: "Tarik Skubal is the top free agent — Mets, Dodgers, Padres and Blue Jays are in the hunt.",
    body: "Tarik Skubal is the biggest name on the free-agent market, with the Mets, Dodgers, Padres and Blue Jays reported as suitors.\n\nRecent deals: Dustin May to the White Sox (3 yrs, $52.5M), Jake Bauers to the Red Sox (4 yrs, $58M) and Evan Phillips to the Braves (3 yrs, $35M). Qualifying-offer decisions were due November 17 — David Bednar and Ryan Jeffers accepted, while Seiya Suzuki and Randy Arozarena turned theirs down.",
    source: "https://www.mlb.com/news/mlb-rumors-and-2026-27-free-agent-news-november-17",
    video: ""
  },
  {
    title: "Premier League: big title-race weekends ahead",
    category: "Soccer",
    date: "2026-11-16",
    summary: "Arsenal travel to Newcastle, Liverpool host Manchester United, then Arsenal face Man City.",
    body: "After the international break, the Premier League returns with blockbuster fixtures: Newcastle vs Arsenal (Nov 21), Liverpool vs Manchester United (Nov 22) and a huge Arsenal vs Manchester City clash at the Emirates on November 29.\n\nCheck our Fixtures section for the full list.",
    source: "https://www.soccergraph.com/2026/09/premier-league-november-fixtures-full-schedule-dates-kickoff-times.html",
    video: ""
  },
  {
    title: "Champions League Matchday 5 preview",
    category: "Soccer",
    date: "2026-11-15",
    summary: "Arsenal vs Dortmund, Man City vs Napoli, Real Madrid vs PSV and PSG vs Roma headline the week.",
    body: "Matchday 5 of the league phase brings 18 games over two nights. Tuesday (Nov 24) features Arsenal vs Borussia Dortmund, Manchester City vs Napoli and Real Madrid vs PSV. Wednesday (Nov 25) has Lille vs Bayern Munich, PSG vs Roma, Club Brugge vs Liverpool and Sporting CP vs Manchester United.",
    source: "https://www.uefa.com/uefachampionsleague/news/02a8-2174c9e9019d-f909a77bd77a-1000--2026-27-champions-league-all-the-league-phase-fixtures-a/",
    video: ""
  },
];

/* ---------------- FIXTURES / MATCH SCHEDULE ----------------
   Past fixtures hide automatically. Add "score" after a game to show the result.
   time: local time with zone, e.g. "8:20 PM ET" (or "TBC") */
const FIXTURES = [
  { date: "2026-11-17", time: "TBC", sport: "NHL", comp: "Original Six Series", home: "Toronto Maple Leafs", away: "Chicago Blackhawks" },
  { date: "2026-11-18", time: "TBC", sport: "NHL", comp: "Original Six Series", home: "Boston Bruins", away: "Detroit Red Wings" },
  { date: "2026-11-21", time: "TBC", sport: "Soccer", comp: "Premier League", home: "Newcastle", away: "Arsenal" },
  { date: "2026-11-22", time: "TBC", sport: "Soccer", comp: "Premier League", home: "Liverpool", away: "Manchester United" },
  { date: "2026-11-24", time: "3:00 PM ET", sport: "Soccer", comp: "Champions League", home: "Arsenal", away: "Borussia Dortmund" },
  { date: "2026-11-24", time: "3:00 PM ET", sport: "Soccer", comp: "Champions League", home: "Manchester City", away: "Napoli" },
  { date: "2026-11-24", time: "3:00 PM ET", sport: "Soccer", comp: "Champions League", home: "Real Madrid", away: "PSV Eindhoven" },
  { date: "2026-11-24", time: "TBC", sport: "Soccer", comp: "Champions League", home: "Galatasaray", away: "Aston Villa" },
  { date: "2026-11-25", time: "3:00 PM ET", sport: "Soccer", comp: "Champions League", home: "Paris Saint-Germain", away: "Roma" },
  { date: "2026-11-25", time: "TBC", sport: "Soccer", comp: "Champions League", home: "Lille", away: "Bayern Munich" },
  { date: "2026-11-25", time: "TBC", sport: "Soccer", comp: "Champions League", home: "Club Brugge", away: "Liverpool" },
  { date: "2026-11-25", time: "TBC", sport: "Soccer", comp: "Champions League", home: "Sporting CP", away: "Manchester United" },
  { date: "2026-11-25", time: "12:45 PM ET", sport: "Soccer", comp: "Champions League", home: "Sabah", away: "Barcelona" },
  { date: "2026-11-25", time: "8:00 PM ET", sport: "NFL", comp: "Week 12", home: "Los Angeles Rams", away: "Green Bay Packers" },
  { date: "2026-11-26", time: "1:00 PM ET", sport: "NFL", comp: "Thanksgiving", home: "Detroit Lions", away: "Chicago Bears" },
  { date: "2026-11-26", time: "4:30 PM ET", sport: "NFL", comp: "Thanksgiving", home: "Dallas Cowboys", away: "Philadelphia Eagles" },
  { date: "2026-11-26", time: "8:20 PM ET", sport: "NFL", comp: "Thanksgiving", home: "Buffalo Bills", away: "Kansas City Chiefs" },
  { date: "2026-11-27", time: "3:00 PM ET", sport: "NFL", comp: "Week 12", home: "Pittsburgh Steelers", away: "Denver Broncos" },
  { date: "2026-11-29", time: "TBC", sport: "Soccer", comp: "Premier League", home: "Arsenal", away: "Manchester City" },
  { date: "2026-11-29", time: "4:25 PM ET", sport: "NFL", comp: "Week 12", home: "San Francisco 49ers", away: "Seattle Seahawks" },
  { date: "2026-11-30", time: "8:15 PM ET", sport: "NFL", comp: "Monday Night Football", home: "Tampa Bay Buccaneers", away: "Carolina Panthers" },
];

/* ---------------- LEGENDS ----------------
   Stories about the greatest players of all time. */
const LEGENDS = [
  {
    name: "Pelé", sport: "Soccer", country: "Brazil", era: "1956–1977", number: "10",
    headline: "The King who won three World Cups",
    story: "Edson Arantes do Nascimento burst onto the world stage at just 17, scoring twice in the 1958 World Cup final as Brazil beat Sweden. He went on to lift the trophy again in 1962 and 1970 — the only player ever to win three World Cups.\n\nHe spent almost his entire career at Santos before helping launch soccer in the USA with the New York Cosmos. For millions, Pelé was the reason they fell in love with the game.",
    facts: ["3× World Cup winner (1958, 1962, 1970)", "Scored in a World Cup final at age 17", "Played for Santos & New York Cosmos"]
  },
  {
    name: "Diego Maradona", sport: "Soccer", country: "Argentina", era: "1976–1997", number: "10",
    headline: "The magician of Mexico '86",
    story: "At the 1986 World Cup, Maradona produced one of the greatest individual tournaments in history. Against England in the quarter-final he dribbled past half the team for what fans voted the 'Goal of the Century', and he captained Argentina to the trophy.\n\nAt Napoli he became a god, leading an unfashionable southern club to its first two Serie A titles (1987 and 1990).",
    facts: ["World Cup winner & Golden Ball, 1986", "'Goal of the Century' vs England", "Led Napoli to 2 Serie A titles"]
  },
  {
    name: "Zinedine Zidane", sport: "Soccer", country: "France", era: "1989–2006", number: "5 / 10",
    headline: "Elegance under pressure",
    story: "Zidane headed in two goals in the 1998 World Cup final as France beat Brazil 3-0 on home soil. Four years later his left-footed volley won Real Madrid the 2002 Champions League final — still one of the most famous goals ever scored.\n\nAs a coach he did something no one had done before: three straight Champions League titles with Real Madrid (2016, 2017, 2018).",
    facts: ["1998 World Cup winner (2 goals in the final)", "Iconic volley in 2002 UCL final", "3 straight UCL titles as Real Madrid coach"]
  },
  {
    name: "Michael Jordan", sport: "NBA", country: "USA", era: "1984–2003", number: "23",
    headline: "Six rings, six Finals MVPs",
    story: "Jordan didn't make his high school varsity team as a sophomore — and used it as fuel for the rest of his life. With the Chicago Bulls he won two 'three-peats' (1991–93 and 1996–98) and was named Finals MVP every single time.\n\nFive regular-season MVPs, ten scoring titles and a global brand later, '23' remains the standard every basketball player is measured against.",
    facts: ["6× NBA champion, 6× Finals MVP", "5× MVP, 10× scoring champion", "Two three-peats with the Chicago Bulls"]
  },
  {
    name: "Kobe Bryant", sport: "NBA", country: "USA", era: "1996–2016", number: "8 / 24",
    headline: "The Mamba Mentality",
    story: "Kobe went straight from high school to the NBA and spent all 20 seasons with the Los Angeles Lakers, winning five championships. On January 22, 2006, he scored 81 points against the Toronto Raptors — the second-highest single-game total in NBA history.\n\nHis relentless work ethic, the 'Mamba Mentality', still inspires athletes in every sport. The Lakers retired both of his numbers, 8 and 24.",
    facts: ["5× NBA champion with the Lakers", "81 points in one game (2006)", "20 seasons with one franchise"]
  },
  {
    name: "Tom Brady", sport: "NFL", country: "USA", era: "2000–2022", number: "12",
    headline: "From pick 199 to seven Super Bowl rings",
    story: "Brady was the 199th pick of the 2000 NFL Draft — 198 players were picked before him. He went on to win six Super Bowls with the New England Patriots and a seventh with the Tampa Bay Buccaneers, more than any single franchise.\n\nHis most famous night: rallying the Patriots back from 28-3 down against Atlanta in Super Bowl LI to win in overtime.",
    facts: ["7× Super Bowl champion", "5× Super Bowl MVP", "Drafted 199th overall in 2000"]
  },
  {
    name: "Wayne Gretzky", sport: "NHL", country: "Canada", era: "1979–1999", number: "99",
    headline: "The Great One",
    story: "Gretzky finished his career with 2,857 points — a record so far ahead that he would still lead all-time even without a single goal. He won four Stanley Cups with the Edmonton Oilers in the 1980s.\n\nHis 894 goals stood as the NHL record for 26 years until Alex Ovechkin passed it in April 2025. The league retired his number 99 for every team.",
    facts: ["NHL record 2,857 career points", "4× Stanley Cup champion (Oilers)", "No. 99 retired league-wide"]
  },
  {
    name: "Babe Ruth", sport: "MLB", country: "USA", era: "1914–1935", number: "3",
    headline: "The Sultan of Swat",
    story: "Babe Ruth started his career as a star pitcher with the Boston Red Sox before being sold to the New York Yankees in 1920 — where he changed baseball forever with the home run.\n\nHe hit 60 home runs in 1927 and finished with 714, records that stood for decades. Yankee Stadium became known as 'The House That Ruth Built'.",
    facts: ["714 career home runs", "60 HRs in the 1927 season", "Star pitcher before becoming a slugger"]
  },
  {
    name: "Jackie Robinson", sport: "MLB", country: "USA", era: "1947–1956", number: "42",
    headline: "The man who changed the game",
    story: "On April 15, 1947, Jackie Robinson took the field for the Brooklyn Dodgers and broke Major League Baseball's color barrier. Facing abuse from crowds and opponents, he responded with excellence — winning Rookie of the Year and later the NL MVP.\n\nIn 1997 MLB retired No. 42 across every team, and every April 15 all players wear 42 on Jackie Robinson Day.",
    facts: ["Broke MLB's color barrier in 1947", "1947 Rookie of the Year, 1949 NL MVP", "No. 42 retired across all of MLB"]
  },
];

/* ---------------- PRODUCT REVIEWS ----------------
   rating: 1 to 5   |   link: optional "Buy / Learn more" link */
const REVIEWS = [
  {
    product: "Example: Match Football (Size 5)",
    brand: "Brand name",
    rating: 4.5,
    date: "2026-11-10",
    image: "",
    pros: ["Great touch and grip", "Holds shape well"],
    cons: ["Pricey"],
    verdict: "Example review — replace with your own verdict.",
    link: ""
  },
  {
    product: "Example: Running Shoes",
    brand: "Brand name",
    rating: 4,
    date: "2026-11-05",
    image: "",
    pros: ["Comfortable", "Lightweight"],
    cons: ["Runs slightly small"],
    verdict: "Example review — replace with your own verdict.",
    link: ""
  },
  {
    product: "Example: Wireless Earbuds for Training",
    brand: "Brand name",
    rating: 3.5,
    date: "2026-11-01",
    image: "",
    pros: ["Secure fit", "Sweat resistant"],
    cons: ["Average battery"],
    verdict: "Example review — replace with your own verdict.",
    link: ""
  },
];

/* ---------------- COLLABS ---------------- */
const COLLABS = [
  {
    partner: "Your next partner",
    type: "Brand Collab",
    description: "Example — showcase a sponsored video, product feature or channel collab here.",
    link: ""
  },
];

const COLLAB_OFFERS = [
  { icon: "🎬", title: "Sponsored Videos", text: "Dedicated YouTube videos & Shorts featuring your brand." },
  { icon: "📱", title: "TikTok Promotions", text: "Short-form content reaching sports fans worldwide." },
  { icon: "⭐", title: "Product Reviews", text: "Honest, hands-on reviews of sports gear & tech." },
  { icon: "🤝", title: "Creator Collabs", text: "Team up with us on match reactions, challenges & more." },
];
