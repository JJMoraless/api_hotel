USE db_api_hotel;
ALTER TABLE registers
ADD CONSTRAINT fk_rate_id
FOREIGN KEY(rate_id) REFERENCES rate(id)