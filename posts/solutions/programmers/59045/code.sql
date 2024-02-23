SELECT I.ANIMAL_ID, I.ANIMAL_TYPE, I.NAME
FROM
  ANIMAL_INS AS I
  JOIN ANIMAL_OUTS USING (ANIMAL_ID)
WHERE SEX_UPON_INTAKE != SEX_UPON_OUTCOME
ORDER BY ANIMAL_ID;
