const router = require('express').Router()
const adminRoutes = require('./admin.route')
const tbInfoRoutes = require('./tb-info.route')
const yearRoutes = require('./year.route')
const subdistrictRoutes = require('./subdistrict.route')
const ClusterAttributeRoutes = require('./cluster-attribute.route')
const healthFacilityRoutes = require('./health-facility.route')

router.use("/admins", adminRoutes)
router.use("/tb-infos", tbInfoRoutes)
router.use("/subdistricts", subdistrictRoutes)
router.use("/years", yearRoutes)
router.use("/cluster-attributes", ClusterAttributeRoutes)
router.use("/health-facilities", healthFacilityRoutes)

module.exports = router