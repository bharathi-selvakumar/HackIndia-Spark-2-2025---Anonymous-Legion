const flightGraph = {
    "New York (JFK)": { "Chicago (ORD)": 2, "Los Angeles (LAX)": 6, "Dallas (DFW)": 4, "Miami (MIA)": 3 },
    "Chicago (ORD)": { "Los Angeles (LAX)": 3, "Atlanta (ATL)": 1.5, "Denver (DEN)": 2, "Dallas (DFW)": 1.8 },
    "Atlanta (ATL)": { "Los Angeles (LAX)": 5, "Miami (MIA)": 1.5, "Dallas (DFW)": 2 },
    "Los Angeles (LAX)": { "San Francisco (SFO)": 1, "Denver (DEN)": 3, "Dallas (DFW)": 2.5 },
    "San Francisco (SFO)": { "Seattle (SEA)": 2, "Los Angeles (LAX)": 1, "Denver (DEN)": 2.5 },
    "Dallas (DFW)": { "Denver (DEN)": 1.5, "Las Vegas (LAS)": 2, "Miami (MIA)": 2.5 },
    "Miami (MIA)": { "Atlanta (ATL)": 1.5, "Dallas (DFW)": 2.5, "New York (JFK)": 3 },
    "Denver (DEN)": { "Seattle (SEA)": 3, "Las Vegas (LAS)": 1.5, "Chicago (ORD)": 2 },
    "Seattle (SEA)": { "San Francisco (SFO)": 2, "Denver (DEN)": 3 },
    "Las Vegas (LAS)": { "Los Angeles (LAX)": 1, "Denver (DEN)": 1.5, "Dallas (DFW)": 2 }
};

module.exports = flightGraph;
