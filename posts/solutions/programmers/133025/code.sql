SELECT FLAVOR
FROM
  FIRST_HALF
  JOIN ICECREAM_INFO USING (FLAVOR)
WHERE TOTAL_ORDER >= 3000 AND INGREDIENT_TYPE = 'fruit_based'
ORDER BY TOTAL_ORDER DESC;
