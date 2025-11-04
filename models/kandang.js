module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        Nama_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Nama_petugas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Usia_hewan: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Jenis_hewan: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Tahun_lahir: {
            type: DataTypes.TEXT,
            allowNull: false
        },


    }, {
        tableName : 'Kandang',
        timestamps: true,
        freezeTableName: true
    });
    return Kandang;
}