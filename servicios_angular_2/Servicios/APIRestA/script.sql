
CREATE TABLE res_usuario
(
   res_id serial NOT NULL,
   res_paterno character varying(50) NOT NULL,
   res_materno character varying(50) NOT NULL,
   res_nombre character varying(50) NOT NULL,
   res_ci character varying(40) NOT NULL,
   res_cel character varying(40) NOT NULL,
   res_estado character varying(1) DEFAULT 'A'::character varying,
   res_registrado timestamp without time zone NOT NULL DEFAULT now(),
   res_modificado timestamp without time zone NOT NULL DEFAULT now(),
   res_usuario character varying(20) NOT NULL DEFAULT 'ADMIN'::character varying,
   PRIMARY KEY(res_id )
  );

CREATE TABLE res_sala
(
  res_s_id serial PRIMARY KEY,
  res_s_res_id integer NOT NULL,
  res_s_nombre  character varying(200) NOT NULL,  
  res_s_nro  character varying(50) NOT NULL,
  res_s_fecha date  NOT NULL,
  res_s_hora character varying(50) NOT NULL,  
  res_s_estado character varying(2) DEFAULT 'A'::character varying,
  res_s_registrado timestamp without time zone NOT NULL DEFAULT now(),
  res_s_modificado timestamp without time zone NOT NULL DEFAULT now(),
  FOREIGN KEY(res_s_res_id) REFERENCES res_usuario(res_id)
);