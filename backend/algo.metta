;;; Define the Airports as Nodes
(: airport JFK)
(: airport LAX)
(: airport ORD)
(: airport ATL)
(: airport DFW)

;;; Define Flights with Distances as Weighted Edges
(: flight JFK LAX 4000)
(: flight JFK ORD 1200)
(: flight ORD LAX 2800)
(: flight ORD ATL 1000)
(: flight ATL LAX 3200)
(: flight ATL DFW 1300)
(: flight DFW LAX 2000)

;;; Initialize Distance Table (Infinity for all except the starting airport)
(: distance JFK 0)
(: distance LAX inf)
(: distance ORD inf)
(: distance ATL inf)
(: distance DFW inf)

;;; Initialize Previous Node Table
(: previous-node JFK nil)
(: previous-node LAX nil)
(: previous-node ORD nil)
(: previous-node ATL nil)
(: previous-node DFW nil)

;;; Get List of Unvisited Airports
(: unvisited-airports (-> (list (airport JFK LAX ORD ATL DFW))))

;;; Function to Find the Unvisited Airport with the Smallest Distance
(: min-distance-airport (-> (list)
  (reduce (lambda (a b) (if (< (distance a) (distance b)) a b)) (unvisited-airports))))

;;; Get Neighbors of an Airport
(: airport-neighbors (-> (airport)
  (filter (lambda (dest) (flight airport dest _)) (unvisited-airports))))

;;; Get Flight Weight (Distance) Between Two Airports
(: flight-weight (-> (a b)
  (if (flight a b ?w) w inf)))

;;; Set Distance for an Airport
(: set-distance (-> (node value) (set distance node value)))

;;; Set Previous Node for Backtracking
(: set-previous-node (-> (node prev) (set previous-node node prev)))

;;; Implement Dijkstra’s Algorithm
(: dijkstra (-> (source)
  (let ((visited '()))
    (while (not (empty? (unvisited-airports)))
      (let ((current (min-distance-airport)))
        (foreach (neighbor (airport-neighbors current))
          (let ((new-dist (+ (distance current) (flight-weight current neighbor))))
            (if (< new-dist (distance neighbor))
              (set-distance neighbor new-dist)
              (set-previous-node neighbor current))))
        (set visited (cons current visited)))))))

;;; Extract the Shortest Route from Destination to Source
(: extract-route (-> (destination)
  (let ((route '()) (current destination))
    (while (not (equal? current JFK))
      (set route (cons current route))
      (set current (previous-node current)))
    (set route (cons JFK route))
    route)))

;;; Run the Algorithm and Find the Shortest Path from JFK to LAX
(dijkstra JFK)
(extract-route LAX)
