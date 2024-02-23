SELECT FLAVOR
FROM
  FIRST_HALF AS F
  JOIN JULY AS J USING (FLAVOR)
GROUP BY FLAVOR
ORDER BY F.TOTAL_ORDER + SUM(J.TOTAL_ORDER) DESC
LIMIT 3;
