/* 

Data extracted from https://www.instituteforgovernment.org.uk/publication/whitehall-monitor-2018/abbreviations using the following script in the console: 

const orgAcronymArr = [...document.querySelectorAll("tr > th > strong")];
const orgNameArr = [...document.querySelectorAll(".st-val")].filter(
  (item) => item.innerText.trim() !== "National Savings and Investments"
);
const orgsArr = orgAcronymArr.map((item, index) => {
  return { acronym: item.innerText, name: orgNameArr[index].innerText.trim() };
});

copy(orgsArr)

*/
const orgsData = [
  {
    acronym: "AGO",
    name: "Attorney General's Office",
  },
  {
    acronym: "APA",
    name: "Asset Protection Agency",
  },
  {
    acronym: "BIS",
    name: "Department for Business, Innovation and Skills",
  },
  {
    acronym: "BEIS",
    name: "Department for Business, Energy and Industrial Strategy",
  },
  {
    acronym: "CO",
    name: "Cabinet Office",
  },
  {
    acronym: "CxD",
    name: "Chancellor's Departments (APA, DMO, GAD, HMRC, HMT, NS&I, OBR)",
  },
  {
    acronym: "DCLG",
    name: "Department for Communities and Local Government",
  },
  {
    acronym: "DCMS",
    name: "Department for Digital, Culture, Media and Sport",
  },
  {
    acronym: "DECC",
    name: "Department of Energy and Climate Change",
  },
  {
    acronym: "Defra",
    name: "Department for Environment, Food and Rural Affairs",
  },
  {
    acronym: "DE&S",
    name: "Defence Equipment and Support (part of MoD)",
  },
  {
    acronym: "DExEU",
    name: "Department for Exiting the European Union",
  },
  {
    acronym: "DfE",
    name: "Department for Education",
  },
  {
    acronym: "DfID",
    name: "Department for International Development",
  },
  {
    acronym: "DfT",
    name: "Department for Transport",
  },
  {
    acronym: "DH",
    name: "Department of Health",
  },
  {
    acronym: "DHSC",
    name: "Department of Health and Social Care",
  },
  {
    acronym: "DMO",
    name: "Debt Management Office",
  },
  {
    acronym: "DPM",
    name: "Deputy Prime Minister",
  },
  {
    acronym: "DVLA",
    name: "Driver and Vehicle Licensing Agency (part of DfT)",
  },
  {
    acronym: "DWP",
    name: "Department for Work and Pensions",
  },
  {
    acronym: "ERG",
    name: "Efficiency and Reform Group (part of CO)",
  },
  {
    acronym: "FCO",
    name: "Foreign and Commonwealth Office",
  },
  {
    acronym: "GAD",
    name: "Government Actuary's Department",
  },
  {
    acronym: "GDS",
    name: "Government Digital Service",
  },
  {
    acronym: "HCS",
    name: "Home Civil Service (all civil servants in UK, Scottish and Welsh governments)",
  },
  {
    acronym: "HMRC",
    name: "Her Majesty's Revenue and Customs",
  },
  {
    acronym: "HMT",
    name: "Her Majesty's Treasury",
  },
  {
    acronym: "HO",
    name: "Home Office",
  },
  {
    acronym: "HofC",
    name: "House of Commons",
  },
  {
    acronym: "HofL",
    name: "House of Lords",
  },
  {
    acronym: "IPA",
    name: "Infrastructure and Projects Authority",
  },
  {
    acronym: "Law",
    name: "Law officers (AGO, Office of the Advocate General for Scotland)",
  },
  {
    acronym: "MHCLG",
    name: "MInistry of Housing, Communities and Local Government",
  },
  {
    acronym: "MoD",
    name: "Ministry of Defence",
  },
  {
    acronym: "MoJ",
    name: "Ministry for Justice",
  },
  {
    acronym: "MPA",
    name: "Major Projects Authority (part of CO)",
  },
  {
    acronym: "NAO",
    name: "National Audit Office",
  },
  {
    acronym: "NHS",
    name: "National Health Service",
  },
  {
    acronym: "NICS",
    name: "Northern Ireland Civil Service",
  },
  {
    acronym: "NIO",
    name: "Northern Ireland Office",
  },
  {
    acronym: "NS&I",
    name: "National Savings and Investments",
  },
  {
    acronym: "OBR",
    name: "Office for Budget Responsibility",
  },
  {
    acronym: "ONS",
    name: "Office for National Statistics",
  },
  {
    acronym: "PM",
    name: "Prime Minister",
  },
  {
    acronym: "Scot",
    name: "Scotland Office",
  },
  {
    acronym: "SG",
    name: "Scottish Government",
  },
  {
    acronym: "Wal",
    name: "Wales Office",
  },
  {
    acronym: "WG",
    name: "Welsh Government",
  },
  {
    acronym: "AME",
    name: "Annually Managed Expenditure",
  },
  {
    acronym: "AO/AA",
    name: "Administrative Office/Administrative Assistant (civil service grade)",
  },
  {
    acronym: "ACSES",
    name: "Annual Civil Service Employment Survey",
  },
  {
    acronym: "ALB",
    name: "Arm's length body",
  },
  {
    acronym: "API",
    name: "Application Programming Interface",
  },
  {
    acronym: "AR",
    name: "Annual Report",
  },
  {
    acronym: "BUD",
    name: "Budget",
  },
  {
    acronym: "CAME",
    name: "Capital Annually Managed Expenditure",
  },
  {
    acronym: "CDEL",
    name: "Capital Departmental Expenditure Limit",
  },
  {
    acronym: "CS",
    name: "Civil service",
  },
  {
    acronym: "DEL",
    name: "Departmental Expenditure Limit",
  },
  {
    acronym: "DLC",
    name: "Delegated Legislation Committee",
  },
  {
    acronym: "EO",
    name: "Executive Office (civil service grade)",
  },
  {
    acronym: "FTE",
    name: "Full-time equivalent",
  },
  {
    acronym: "FoI",
    name: "Freedom of Information",
  },
  {
    acronym: "G6/G7",
    name: "Grade 6 and Grade 7 (civil service grade)",
  },
  {
    acronym: "GDP",
    name: "Gross domestic product",
  },
  {
    acronym: "GE",
    name: "General election",
  },
  {
    acronym: "HS2",
    name: "High Speed Rail 2",
  },
  {
    acronym: "IfG",
    name: "Institute for Government",
  },
  {
    acronym: "IFRS",
    name: "International Financial Reporting Standards",
  },
  {
    acronym: "IMF",
    name: "International Monetary Fund",
  },
  {
    acronym: "InCiSE",
    name: "International Civil Service Effectiveness Index",
  },
  {
    acronym: "IT/ICT",
    name: "Information technology/Information and communications technology",
  },
  {
    acronym: "MoS",
    name: "Minister of State",
  },
  {
    acronym: "NCS",
    name: "National Security Council",
  },
  {
    acronym: "NDPB",
    name: "Non-departmental public body",
  },
  {
    acronym: "NGO",
    name: "Non-governmental organisation",
  },
  {
    acronym: "NISRA",
    name: "Northern Ireland Statistics and Research Agency",
  },
  {
    acronym: "ODM",
    name: "Opposition Day Motion",
  },
  {
    acronym: "OSCAR",
    name: "Online System for Central Accounting Reporting",
  },
  {
    acronym: "PAC",
    name: "Public Accounts Committee",
  },
  {
    acronym: "PASC",
    name: "Public Administration Select Committee",
  },
  {
    acronym: "PESA",
    name: "Public Expenditure Statistical Analysis",
  },
  {
    acronym: "PMDU",
    name: "Prime Minister's Delivery Unit",
  },
  {
    acronym: "PSA",
    name: "Public Service Agreement",
  },
  {
    acronym: "PUSS",
    name: "Parliamentary Under Secretary of State",
  },
  {
    acronym: "Q (Q1 etc.)",
    name: "Quarter",
  },
  {
    acronym: "QDS",
    name: "Quarterly Data Summary",
  },
  {
    acronym: "RAG",
    name: "Red-Amber-Green (rating scheme for delivery confidence in projects)",
  },
  {
    acronym: "RAME",
    name: "Resource Annually Managed Expenditure",
  },
  {
    acronym: "RDEL",
    name: "Resource Departmental Expenditure Limit",
  },
  {
    acronym: "SCS",
    name: "Senior civil service",
  },
  {
    acronym: "SDP",
    name: "Single Departmental Plan",
  },
  {
    acronym: "SEO/HEO",
    name: "Senior Executive Officer/Higher Executive Office (civil service grade)",
  },
  {
    acronym: "SI",
    name: "Statutory Instrument",
  },
  {
    acronym: "SoS",
    name: "Secretary of State",
  },
  {
    acronym: "SR",
    name: "Spending Review/Spending Round",
  },
  {
    acronym: "SRP",
    name: "Structural Reform Plan",
  },
  {
    acronym: "SRO",
    name: "Senior Responsible Owner",
  },
  {
    acronym: "TME",
    name: "Total managed expenditure",
  },
  {
    acronym: "VAT",
    name: "Value Added Tax",
  },
  {
    acronym: "UQ",
    name: "Urgent question",
  },
  {
    acronym: "WGA",
    name: "Whole of Government Accounts",
  },
  {
    acronym: "WMI",
    name: "Workforce Management Information",
  },
];

export default orgsData;
