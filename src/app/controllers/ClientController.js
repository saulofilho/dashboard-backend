import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    const allClients = await Client.findAll();

    return res.json(allClients);
  }

  async store(req, res) {
    const {
      client_name,
      client_last_name,
      client_email,
      client_telephone,
      client_cellphone,
      client_address,
      client_city,
      client_uf,
      client_company_name,
    } = await Client.create(req.body);

    return res.json({
      client_name,
      client_last_name,
      client_email,
      client_telephone,
      client_cellphone,
      client_address,
      client_city,
      client_uf,
      client_company_name,
    });
  }

  async update(req, res) {
    const updateClient = await Client.findByPk(req.params.id);

    await updateClient.update(req.body);

    return res.json(updateClient);
  }

  async delete(req, res) {
    const deletClient = await Client.findByPk(req.params.id);

    await deletClient.destroy();

    return res.json(deletClient);
  }
}

export default new ClientController();
