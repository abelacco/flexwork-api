const { Router } = require('express')
const router = Router();
const company = require('../controllers/companyController');

router.get('/company', company.getCompanies);
router.get('/company/:id', company.getCompanyById);
router.post('/company', company.postCompany);
router.put('/company/:id', (req, res) => {
    company.editCompany(req, res);
    console.log("PUT!!");
});
router.delete('/company/:id',company.deleteCompany);

module.exports = router;