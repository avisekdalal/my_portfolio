import styles from './Companies.module.css';

const companies = [
  {
    name: 'Cyient',
    logo: '/img/companies/cyient.png',
    background: '#008ca1',
  },
  {
    name: 'Infor',
    logo: '/img/companies/infor.png',
    background: '#c8102e',
  },
  {
    name: 'Broadcom',
    logo: '/img/companies/broadcom.png',
    background: '#ffffff',
  },
  {
    name: 'OpenText',
    logo: '/img/companies/opentext.png',
    background: '#0073e6',
  },
  {
    name: 'PMI Standards',
    logo: '/img/companies/pmi-standards.png',
    background: '#ffffff',
  },
  {
    name: 'Equitable',
    logo: '/img/companies/equitable.png',
    background: '#00a3ad',
  },
];

export default function Companies() {
  return (
    <section
      id="companies"
      className={styles.section}
      aria-labelledby="companies-heading"
    >
      <div className="container">
        <h2 id="companies-heading" className={styles.title}>
          Companies I Worked For
        </h2>
        <ul className={styles.list}>
          {companies.map((company) => (
            <li key={company.name} className={styles.item}>
              <div
                className={styles.logoFrame}
                style={{ backgroundColor: company.background }}
              >
                <img
                  src={company.logo}
                  alt=""
                  className={styles.logo}
                />
              </div>
              <span className={styles.name}>{company.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
