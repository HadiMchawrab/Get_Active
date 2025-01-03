async function getClubsNearLocation(latitude, longitude, radius) {
    const query = `
        SELECT * FROM clubs
        WHERE ST_Distance_Sphere(
            point(longitude, latitude),
            point(?, ?)
        ) <= ?
    `;
    const values = [longitude, latitude, radius];

    try {
        const [results] = await db.execute(query, values);
        return results;
    } catch (error) {
        console.error('Error querying clubs near location:', error);
        throw error;
    }
}

async function getTrainersNearLocation(latitude, longitude, radius) {
    const query = `
        SELECT * FROM trainers
        WHERE ST_Distance_Sphere(
            point(longitude, latitude),
            point(?, ?)
        ) <= ?
    `;
    const values = [longitude, latitude, radius];

    try {
        const [results] = await db.execute(query, values);
        return results;
    } catch (error) {
        console.error('Error querying trainers near location:', error);
        throw error;
    }
}

async function registerUser(user, type) {
    const query = `
        INSERT INTO ${type}s (name, email, phone, latitude, longitude)
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [user.name, user.email, user.phone, user.latitude, user.longitude];

    try {
        await db.execute(query, values);
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

async function getProfile(user) {
    const query = `
        SELECT * FROM users
        WHERE email = ?
    `;
    const values = [user.email];

    try {
        const [results] = await db.execute(query, values);
        return results;
    } catch (error) {
        console.error('Error getting profile:', error);
        throw error;
    }
}

module.exports = {
    getClubsNearLocation,
    getTrainersNearLocation
};