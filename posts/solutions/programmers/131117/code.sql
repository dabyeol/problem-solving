SELECT PRODUCT_ID, PRODUCT_NAME, PRICE * SUM(AMOUNT) AS TOTAL_SALES
FROM
  FOOD_PRODUCT
  JOIN FOOD_ORDER USING (PRODUCT_ID)
WHERE PRODUCE_DATE LIKE '2022-05-%'
GROUP BY PRODUCT_ID
ORDER BY TOTAL_SALES DESC, PRODUCT_ID;
