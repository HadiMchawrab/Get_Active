CREATE TABLE Compounds (
    Compound_ID UUID NOT NULL,
    Address_1 VARCHAR(255) NOT NULL,
    Address_2 VARCHAR(255),
    City VARCHAR(100) NOT NULL,
    Country VARCHAR(100) NOT NULL,
    Comp_Name VARCHAR(255) NOT NULL,
    DESCR VARCHAR(255) NOT NULL,
    Contact_Name VARCHAR(255) NOT NULL,
    Contact_Nb1 VARCHAR(15) NOT NULL,
    Contact_Nb2 VARCHAR(15),
    Longitude DECIMAL(10, 8),
    Latitude DECIMAL(11, 8),
    Photos BLOB,
    CONSTRAINT PK_Compounds_Compound_ID PRIMARY KEY (Compound_ID)
);

CREATE TABLE Courts (
    Area_ID UUID NOT NULL,
    Compound_ID UUID NOT NULL,
    C_Type VARCHAR(100) NOT NULL,
    Area_Number INT NOT NULL,
    Photos BLOB,
    CONSTRAINT PK_Courts_Area_ID PRIMARY KEY (Area_ID),
    CONSTRAINT FK_Courts_Compound_ID FOREIGN KEY (Compound_ID) REFERENCES Compounds(Compound_ID)
    );

CREATE TABLE User (
    User_ID UUID NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Phone_Nb VARCHAR(15) NOT NULL,
    F_Name VARCHAR(100) NOT NULL,
    L_Name VARCHAR(100) NOT NULL,
    Birth_Date DATE NOT NULL,
    Gender VARCHAR(2) NOT NULL,
    City VARCHAR(100) NOT NULL,
    Country VARCHAR(100) NOT NULL,
    CONSTRAINT PK_User_User_ID PRIMARY KEY (User_ID)
);

CREATE TABLE Trainer (
    Trainer_ID UUID NOT NULL,
    Phone_Nb VARCHAR(15) NOT NULL,
    F_Name VARCHAR(100) NOT NULL,
    L_Name VARCHAR(100) NOT NULL,
    Birth_Date DATE NOT NULL,
    Gender VARCHAR(2) NOT NULL,
    Photos BLOB,
    DESCR VARCHAR(255) NOT NULL,
    City VARCHAR(100) NOT NULL,
    Country VARCHAR(100) NOT NULL,
    CONSTRAINT PK_Trainer_Trainer_ID PRIMARY KEY (Trainer_ID)
);

CREATE TABLE Area_Reservations (
    User_ID UUID NOT NULL,
    Area_ID UUID NOT NULL,
    Start_Time DATETIME NOT NULL,
    End_Time DATETIME,
    CONSTRAINT PK_Area_Reservations_User_ID PRIMARY KEY (User_ID, Area_ID, Start_Time),
    CONSTRAINT FK_Area_Reservations_User_ID FOREIGN KEY (User_ID) REFERENCES User(User_ID),
    CONSTRAINT FK_Area_Reservations_Area_ID FOREIGN KEY (Area_ID) REFERENCES Courts(Area_ID)
);

CREATE TABLE GYM_Reservations (
    User_ID UUID NOT NULL,
    Trainer_ID INT,
    Start_Time DATETIME NOT NULL,
    End_Time DATETIME,
    Area_ID INT NOT NULL,
    CONSTRAINT PK_Gym_Reservations_User_ID PRIMARY KEY (User_ID, Trainer_ID, Start_Time),
    CONSTRAINT FK_Gym_Reservations_User_ID FOREIGN KEY (User_ID) REFERENCES User(User_ID),
    CONSTRAINT FK_Gym_Reservations_Trainer_ID FOREIGN KEY (Trainer_ID) REFERENCES Trainer(Trainer_ID),
    CONSTRAINT FK_Gym_Reservations_Area_ID FOREIGN KEY (Area_ID) REFERENCES Courts(Area_ID)
);
